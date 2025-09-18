from flask import Flask, render_template, request, redirect, url_for, flash, session
import sqlite3

app = Flask(__name__)
app.secret_key = "secret123"   # required for session & flash

# ---------- HOME ----------
@app.route("/")
def home():
    return redirect(url_for("signin"))

# ---------- SIGN UP ----------
@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        fullname = request.form["fullname"]
        roll_number = request.form["roll_number"]
        department = request.form["department"]
        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("users.db")
        cur = conn.cursor()
        try:
            cur.execute("INSERT INTO users (fullname, roll_number, department, email, password) VALUES (?, ?, ?, ?, ?)",
                        (fullname, roll_number, department, email, password))
            conn.commit()
            flash("✅ Account created successfully! Please sign in.", "success")
            return redirect(url_for("signin"))
        except sqlite3.IntegrityError:
            flash("⚠ Email already registered. Try logging in.", "danger")
        finally:
            conn.close()
    return render_template("signup.html")

# ---------- SIGN IN ----------
@app.route("/signin", methods=["GET", "POST"])
def signin():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        conn = sqlite3.connect("users.db")
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE email=? AND password=?", (email, password))
        user = cur.fetchone()
        conn.close()

        if user:
            session["user"] = user[1]   # fullname
            return redirect(url_for("dashboard"))
        else:
            flash("❌ Invalid email or password", "danger")
    return render_template("signin.html")

# ---------- DASHBOARD ----------
@app.route("/dashboard")
def dashboard():
    if "user" in session:
        return render_template("dashboard.html", name=session["user"])
    else:
        return redirect(url_for("signin"))

# ---------- LOGOUT ----------
@app.route("/logout")
def logout():
    session.pop("user", None)
    flash("Logged out successfully.", "info")
    return redirect(url_for("signin"))

if __name__ == "__main__":
    app.run(debug=True)
