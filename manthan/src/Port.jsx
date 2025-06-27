import React from "react";

function Port() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      
      <header className="bg-white shadow-md fixed w-full top-0 z-10">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Manthan Parmar</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="# projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      
      <section className="h-screen relative flex items-center justify-center pt-20 text-center">

  <img
    src="back1.jpg"
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
  />

  
  <div className="absolute">
    <h2 className="text-5xl font-bold mb-4 text-gray-900">Hi, I'm Manthan Parmar</h2>
    <p className="text-xl text-gray-800">Web Developer | React Enthusiast | Designer</p>
  </div>
</section>


      
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-6">About Me</h3>
          <p className="text-lg leading-relaxed">
            I'm a passionate web developer with experience in building responsive websites using React, Tailwind CSS, and modern tools. I love turning ideas into interactive web experiences.
          </p>
        </div>
      </section>

      
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-10">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Portfolio Website</h4>
              <p>A personal portfolio made using React and Tailwind CSS.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">ToDo App</h4>
              <p>A minimal task manager built with React Hooks and Local Storage.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
          <p>Email: <a href="mailto:manthan@example.com" className="text-blue-500">manthan@example.com</a></p>
        </div>
      </section>

      
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Manthan Parmar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Port;
