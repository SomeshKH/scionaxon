

export default function LandingFooter() {
  return (
    <footer className="bg-[#1F3A5F] dark:bg-gray-950 text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0F7B6C] to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                <img
                src="/images/Logo1.png"
                alt="logo"
                className="w-full h-full object-cover rounded-lg"
              />
              </div>
              <span className="text-2xl font-bold">ScionAxon</span>
            </div>
            <p className="text-foreground-secondary">Next-generation global trade platform powered by AI</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-foreground-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Import Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Export Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-foreground-secondary">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-foreground-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-foreground-secondary">
          <p>© 2026 ScionAxon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
