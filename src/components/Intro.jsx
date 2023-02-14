import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-14 pb-10">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-light">
        A. <span className="font-semibold">Vilaca</span>
      </h1>
      <p className="text-base md:text-xl mb-3 font-semibold">
        Web Developer & Software Engineer
      </p>
      <p className="text-sm max-w-xl font-medium">
        Full Stack Developer with almost 3 years of experience seeking a software
        engineering role. With a strong foundation in JavaScript, React, and
        Node.js, I have developed and maintained a variety of web applications,
        from e-commerce sites to real-time collaboration tools. I am a quick
        learner and have a passion for coding, continuously seeking out new
        technologies and methodologies to improve my skills.
        <br />
        In my current role, I have demonstrated leadership by mentoring junior
        developers and collaborating with cross-functional teams to deliver
        high-quality products. I am excited to bring my technical expertise and
        problem-solving skills to a dynamic software engineering team where I
        can continue to grow and make an impact.
      </p>
    </div>
  );
}

export default Intro;
