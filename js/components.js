// Shared components and utilities

// Header component
function createHeader() {
  return `
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">CF</span>
            </div>
            <a href="index.html" class="text-2xl font-bold text-gray-800">Community Forum</a>
          </div>
          
          <div class="hidden md:flex items-center space-x-6">
            <a href="index.html" class="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="pages/categories.html" class="text-gray-700 hover:text-blue-600 transition">Categories</a>
            <a href="pages/blog.html" class="text-gray-700 hover:text-blue-600 transition">Blog</a>
            <a href="pages/about.html" class="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="pages/contact.html" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <button class="btn-primary">Sign In</button>
          </div>
          
          <button onclick="toggleMobileMenu()" class="md:hidden text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <div id="mobile-menu" class="hidden md:hidden mt-4 space-y-2">
          <a href="index.html" class="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="pages/categories.html" class="block py-2 text-gray-700 hover:text-blue-600">Categories</a>
          <a href="pages/blog.html" class="block py-2 text-gray-700 hover:text-blue-600">Blog</a>
          <a href="pages/about.html" class="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="pages/contact.html" class="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
          <button class="btn-primary w-full mt-4">Sign In</button>
        </div>
      </nav>
    </header>
  `;
}

// Footer component
function createFooter() {
  return `
    <footer class="bg-gray-900 text-white mt-20">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xl">CF</span>
              </div>
              <span class="text-xl font-bold">Community Forum</span>
            </div>
            <p class="text-gray-400">Building connections, sharing knowledge, growing together.</p>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="index.html" class="hover:text-white transition">Home</a></li>
              <li><a href="pages/categories.html" class="hover:text-white transition">Categories</a></li>
              <li><a href="pages/blog.html" class="hover:text-white transition">Blog</a></li>
              <li><a href="pages/about.html" class="hover:text-white transition">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">Community</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">Guidelines</a></li>
              <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
              <li><a href="pages/contact.html" class="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span class="text-white">f</span>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition">
                <span class="text-white">t</span>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <span class="text-white">in</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Community Forum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}


