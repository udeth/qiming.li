"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [skills, setSkills] = useState<string[]>([]);

  // 完整的技能池
  const allSkills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Golang',
    'AI/ML', 'Vue.js', 'Angular', 'JavaScript', 'Java', 'C++',
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'MongoDB',
    'PostgreSQL', 'Redis', 'GraphQL', 'REST API', 'Microservices',
    'DevOps', 'CI/CD', 'Git', 'Linux', 'Nginx', 'Express.js',
    'FastAPI', 'Django', 'Flask', 'Spring Boot', 'TensorFlow',
    'PyTorch', 'OpenAI', 'LangChain', 'Blockchain', 'Web3',
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Unity',
    'Three.js', 'WebGL', 'D3.js', 'Tailwind CSS', 'SCSS'
  ];

  // 随机选择技能标签
  const getRandomSkills = () => {
    const shuffled = [...allSkills].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 7); // 显示7个技能标签
  };

  useEffect(() => {
    setSkills(getRandomSkills());
  }, []);
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* 左侧内容区域 */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
        <div className="h-full flex items-center justify-center">
          <div className="text-center lg:text-left max-w-2xl space-y-6 lg:space-y-8">
            {/* 主标题 */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 lg:mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                QIMING.LI
              </h1>
              {/* 红色粗线突出提醒 */}
              <div className="w-24 h-1 bg-red-500 mx-auto lg:mx-0 mb-3 lg:mb-4"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 font-light">
                Full-Stack Developer & Creative Engineer
              </p>
            </div>

            {/* 个人简介 */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Focused on creating elegant digital experiences, passionate about exploring the perfect fusion of technology and design.
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Building imagination with code, turning creativity into reality.
              </p>
            </div>

            {/* 技能标签 */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 font-medium">
                View Portfolio
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                Contact Me
              </button>
            </div>

            {/* 社交链接 - 统一灰度背景设计 */}
            <div className="flex justify-center lg:justify-start pt-4">
              <div className="flex -space-x-4">
                {/* Twitter */}
                <a href="#" className="relative group">
                   <div className="w-10 h-10 bg-gray-500 dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200">
                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                     </svg>
                   </div>
                 </a>
                 {/* LinkedIn */}
                 <a href="#" className="relative group">
                    <div className="w-10 h-10 bg-gray-500 dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </a>
                  {/* GitHub */}
                   <a href="#" className="relative group">
                     <div className="w-10 h-10 bg-gray-500 dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200">
                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                       </svg>
                     </div>
                   </a>
                   {/* Instagram */}
                   <a href="#" className="relative group">
                     <div className="w-10 h-10 bg-gray-500 dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200">
                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                       </svg>
                     </div>
                   </a>
                   {/* YouTube */}
                   <a href="#" className="relative group">
                     <div className="w-10 h-10 bg-gray-500 dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200">
                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                       </svg>
                     </div>
                   </a>
                   {/* Dribbble */}
                    <a href="#" className="relative group">
                      <div className="w-10 h-10 bg-gray-500 dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                        </svg>
                      </div>
                    </a>
                    {/* Gmail */}
                       <a href="mailto:mail@qiming.li" className="relative group">
                         <div className="w-10 h-10 bg-gray-500 dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200">
                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.329-3.249 8.329-8.934 0-.528-.081-1.097-.202-1.625z"/>
                           </svg>
                         </div>
                       </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 右侧视频区域 */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-4 sm:p-6 lg:p-5 order-1 lg:order-2">
        <div className="w-full max-w-lg lg:max-w-none aspect-video lg:aspect-auto lg:h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl lg:rounded-3xl shadow-lg"
            style={{ outline: 'none' }}
            onError={(e) => {
              console.log('视频加载失败:', e);
            }}
          >
            <source src="https://oss.idnyx.com/cv.mp4" type="video/mp4" />
            <p className="text-white text-center p-4">您的浏览器不支持视频播放或视频无法加载</p>
          </video>
        </div>
      </div>
    </div>
  );
}
