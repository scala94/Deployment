import emailjs from 'emailjs-com';
import React from 'react';



const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_040whnl',
            'template_lsxhbf9',
            e.target,
            'user_ViGysYFxjgk99k8iPPows'
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err));

        window.location.reload();
    }
    return (
        <div className="contact-border"
            style={{
                backgroundImage: 'url("https://th.bing.com/th/id/OIP.qoNsq92OW-JI3C1PnnCc3gHaEo?pid=ImgDet&rs=1")',
                backgroundPosition: "center",
                backgoundSize: "cover",
            }} onSubmit={sendEmail}>
            <h1>Contact Form</h1>
            <form className="row" style={{ margin: "0px 5% 0px 5%" }}>
                <label className="label">Name</label>
                <input type="text" name="name" className="form-control" ></input>
                <label className="label">Email</label>
                <input type="email" name="user_email" className="form-control" />
                <label className="label">Message</label>
                <textarea name='message' rows='4' className="form-control" />
                <input
                    type="submit" value="Send" className="button btn btn-primary"
                    style={{ marginTop: "30px" }} />

            </form>
        </div>
    )
}

export default Mailer;
