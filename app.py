from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__, template_folder='templates', static_url_path='/static') #for import static files




@app.route('/')
def index():
    return render_template('index.html')



@app.route('/submit_form', methods=['POST'])
def submit_form():

    return redirect(url_for('index')) #when form is submit this will refreshed page


# for extra html files
@app.route('/software')
def software_page():
    return render_template('software.html')

@app.route('/fullstack')
def fullstack_page():
    return render_template('fullstack.html')

@app.route('/JuniorFront')
def JuniorFrontend_page():
    return render_template('JuniorFrontend.html')


@app.route('/softwareEng')
def softwareEng_page():
    return render_template('softwareEng.html')

@app.route('/JuniorBackend')
def JuniorBackend_page():
    return render_template('JuniorBackend.html')

@app.route('/Flutter')
def Flutter_page():
    return render_template('flutter.html')


@app.route('/Android')
def Android_page():
    return render_template('android.html')


@app.route('/AdSales')
def AdSales_page():
    return render_template('Ad Sales.html')


# Give CSS file 
@app.route('/static/css/styles.css')
def serve_css():
    return app.send_static_file('css/styles.css')

@app.route('/static/css/job-post-styles.css')
def serve_job_post_css():
    return app.send_static_file('css/job-post-styles.css')


if __name__ == '__main__':
    app.run(debug=True)

