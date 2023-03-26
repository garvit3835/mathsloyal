import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
const about = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="px-8 md:px-14 lg:px-20 pb-8 md:pb-14 lg:pb-20 flex flex-col gap-4 md:gap-6 text-lg">
        <h1 className="text-3xl text-center font-bold pt-20 md:pt-10 pb-3 md:pb-6">
          About Us
        </h1>
<p>
        Welcome to MathsLoyal, a website dedicated to helping students solve their math doubts with the help of advanced AI technology. Our platform is designed to provide students with a seamless and affordable way to get help with math problems, no matter how complex they may be.


</p>
<p>
        At MathsLoyal, we believe that every student deserves access to quality math education. {"That's"} why we have developed an AI model based on GPT-3, which is designed to solve math problems with a high degree of accuracy. Our AI model is capable of solving a wide range of math problems, from basic arithmetic to complex calculus and everything in between.



</p>
<p>
        We understand that sometimes students may have doubts or questions about the solutions provided by our AI model. {"That's "}why we offer a unique feature that allows students to chat with our experienced tutors if they need further clarification or guidance. Our tutors are available round the clock to help students resolve their doubts and provide personalized support when needed.


</p>
<p>
        At MathsLoyal, we believe in making quality math education accessible and affordable for everyone. {"That's"} why we offer our services at very nominal fees, making it easy for students to get the help they need without breaking the bank. In addition, we also offer a range of free services for students who may not be able to afford our paid services.


</p>
<p>
        We are passionate about math and are committed to helping students achieve their academic goals. Whether {"you're"} struggling with a difficult math problem or just need a little extra help to excel in your math class, MathsLoyal is here to help. We invite you to explore our website and see how our AI technology and experienced tutors can help you overcome any math challenge.




</p>
      </div>

      <Footer />
    </div>
  );
};

export default about;
