import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-[#1e293b] relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Texte du copyright */}
        <p className="text-secondary text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Vannel Feukou. MLOps & GenAI.
        </p>

        {/* Les logos de réseaux sociaux */}
        <div className="flex gap-6">
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/vannel-evrard-feukou-noukatche90092" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-all hover:scale-110" title="LinkedIn">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/varde11" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-all hover:scale-110" title="GitHub">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* Docker Hub */}
          <a href="https://hub.docker.com/repositories/varde11" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-all hover:scale-110" title="Docker Hub">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.988 11.266c.158-.02.32-.036.48-.036h.02c.005 0 .01-.001.015-.001.325.006.632.062.915.158.468.16 1.042.474 1.488 1.135.25.36.41.802.482 1.34.025.187.037.382.037.585 0 .285-.02.562-.058.83a4.706 4.706 0 0 1-.223.957c-.125.336-.296.653-.513.94a4.425 4.425 0 0 1-1.393 1.17c-.57.306-1.246.468-2.028.486-.023.001-.048.001-.073.001H3.593v-3.766a5.532 5.532 0 0 1 .184-.136 6.002 6.002 0 0 1 1.24-.627 6.643 6.643 0 0 1 1.545-.373c.536-.07 1.096-.104 1.681-.104h.024a13.314 13.314 0 0 1 1.94.133 11.455 11.455 0 0 1 1.706.386 6.786 6.786 0 0 1 1.43.61c.427.25.808.56 1.144.93zM2.87 9.422h2.784v2.784H2.87V9.422zm0-3.32h2.784v2.784H2.87V6.101zm0-3.32h2.784v2.785H2.87V2.781zm3.32 6.64h2.784v2.784H6.19V9.422zm0-3.32h2.784v2.784H6.19V6.101zm0-3.32h2.784v2.785H6.19V2.781zm3.32 6.64h2.784v2.784H9.51V9.422zm0-3.32h2.784v2.784H9.51V6.101zm0-3.32h2.784v2.785H9.51V2.781zm3.32 6.64h2.784v2.784h-2.784V9.422zm0-3.32h2.784v2.784h-2.784V6.101zM16.15 9.422h2.784v2.784H16.15V9.422zm-6.192 6.442a.553.553 0 1 0 0 1.106.553.553 0 0 0 0-1.106zm-6.64 0a.553.553 0 1 0 0 1.106.553.553 0 0 0 0-1.106zm13.28 0a.553.553 0 1 0 0 1.106.553.553 0 0 0 0-1.106z"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;