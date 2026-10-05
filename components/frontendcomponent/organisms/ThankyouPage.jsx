export default function ThankyouPage() {
  return (
    <div className="banner thankyou">
      <div className="bg">
        <video
          src="/assets/video/about-us.mp4"
          poster="/assets/video/aboutus_banner.png"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="banner-wrapper">
          <div className="container">
            <div className="heading">
              <h1>Thank You</h1>
              <p>
                Thank you for your interest in Mohit Minerals. We will get back
                to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
