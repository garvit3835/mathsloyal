import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
const refund_policy = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="px-8 md:px-14 lg:px-20 pb-8 md:pb-14 lg:pb-20 flex flex-col gap-4 md:gap-6 text-lg">
        <h1 className="text-3xl text-center font-bold pt-20 md:pt-10 pb-3 md:pb-6">
Refund and Return Policy        </h1>
        <p>
          At MathsLoyal, we want our customers to be completely satisfied with our services. If for any reason you are not satisfied, we offer a refund and return policy subject to the terms and conditions outlined below.




        </p>
        <div>

        <h2 className="text-xl font-semibold">
          Refund Policy

        </h2>
        <p>
          We offer refunds to our customers for unused portions of their subscription fees if they are not satisfied with our services. The refund request must be made within [Insert number] days of the subscription start date. Refunds are processed within [Insert number] business days of the refund request and may take [Insert number] business days to appear on your account. We reserve the right to deny refunds for any reason.




        </p>
        </div>
        <div>

       
          <h2 className="text-xl font-semibold">

          Return Policy

        </h2>
        <p>
          We do not offer returns for our services as they are delivered digitally and cannot be returned. If you experience any technical issues with our services, please contact our customer support team for assistance.



        </p>
        </div>
        <div>

      
          <h2 className="text-xl font-semibold">

          Cancellation Policy

        </h2>
        <p>
          You may cancel your subscription at any time by contacting our customer support team. Upon cancellation, you will no longer have access to our services and will not be charged any further subscription fees.



        </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">

          Contact Us

        </h2>
        <p>
          If you have any questions or concerns about our refund and return policy, please contact us at support@mathsloyal.com.





        </p>
        </div>
        Effective Date: 29th March 2023




      </div>

      <Footer />
    </div>
  );
}

export default refund_policy