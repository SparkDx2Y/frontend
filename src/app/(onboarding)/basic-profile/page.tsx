import AuthLayout from "@/components/AuthLayout";

export default function BasicProfilePage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Complete Your Profile</h2>
          <p className="text-gray-400">Tell us a bit about yourself to get started</p>
        </div>

        <form className="space-y-6">
          {/* First Name Field */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>


          {/* Birthday Fields (Day, Month, Year) */}
          <div>
             <label className="block text-sm font-medium text-gray-400 mb-2">
              Birthday
            </label>
            <div className="grid grid-cols-3 gap-4">
              {/* Day */}
              <select
                id="birthDay"
                aria-label="Day of birth"
                 className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              >
                <option value="">Day</option>
                {/* Options will be generated here with JS/React logic */}
              </select>
              {/* Month */}
               <select
                id="birthMonth"
                 aria-label="Month of birth"
                 className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              >
                <option value="">Month</option>
                {/* Options will be generated here with JS/React logic */}
              </select>
              {/* Year */}
               <select
                id="birthYear"
                 aria-label="Year of birth"
                 className="w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              >
                <option value="">Year</option>
                {/* Options will be generated here with JS/React logic */}
              </select>
            </div>
          </div>

          {/* Gender Selection - "I'm a:" */}
           <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              I&apos;m a: {/* Using &apos; for apostrophe */}
            </label>
            <div className="grid grid-cols-2 gap-4">
                 <button type="button" className="gender-btn w-full flex items-center justify-center px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors" data-gender="woman">
                    Woman
                 </button>
                  <button type="button" className="gender-btn w-full flex items-center justify-center px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors" data-gender="man">
                    Man
                 </button>
                 {/* Add other gender options as needed */}
            </div>
          </div>

          {/* Interested In */}
          <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Interested in:</label>
              <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="interest-btn w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors" data-interest="women">Women</button>
                  <button type="button" className="interest-btn w-full px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors" data-interest="men">Men</button>
              </div>
          </div>

           {/* Looking for */}
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Looking for</label>
                {/* This button will trigger the modal - type="button" is important */}
                <button type="button" className="looking-for-btn w-full flex items-center justify-center px-4 py-3 bg-dark-input border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-800 transition-colors">
                    {/* Plus icon SVG */}
                     <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span>Add Relationship Intent</span> {/* Text will update based on modal selection */}
                </button>
            </div>

          {/* Profile Photos */}
           <div>
             <label className="block text-sm font-medium text-gray-400 mb-4">
              Profile photos
            </label>
             <div className="grid grid-cols-3 gap-4">
                {/* Photo Upload Squares - Repeat this div for each upload slot */}
                {Array(3).fill(0).map((_, index) => (
                    <div key={index} className="aspect-square border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                         {/* Plus icon SVG */}
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                         {/* An input type="file" would be associated with this div */}
                    </div>
                ))}
             </div>
             <p className="mt-4 text-sm text-gray-400 text-center">Drag OR Click the box to put Photos</p>
             <p className="mt-2 text-sm text-gray-400 text-center">Upload 2-3 photos to complete your profile</p>
          </div>

          {/* Next Button */}
          {/* Changed to type="submit" assuming this submits the form data */}
          <button type="submit" className="w-full bg-primary text-white rounded-full px-8 py-4 font-medium hover:bg-opacity-90 transition-colors text-lg">
            Continue
          </button>
        </form>
      </div>

      {/* Relationship Intent Modal Structure */}
      {/* This will need React state to control visibility */}
      <div id="relationshipModal" className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden"> {/* hidden class controlled by state */}
           <div className="min-h-screen px-4 text-center">
            {/* This div handles the darkening background */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>

            {/* Modal panel */}
            <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-[#1E1F23] rounded-2xl shadow-xl relative">
                {/* Close button */}
                {/* This button will need an onClick handler to close the modal */}
                <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">What are you looking for?</h2>
                    <p className="text-gray-400">All good if it changes. There's something for everyone.</p>
                </div>

                {/* Relationship Intent Options Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Example Option Button - Repeat for all options */}
                    <button type="button" className="bg-dark-input p-6 rounded-xl text-center hover:bg-gray-800 transition-colors group">
                        <span className="text-3xl mb-2 block">💘</span>
                        <span className="text-gray-300 font-medium">Long-term partner</span>
                    </button>
                     <button type="button" className="bg-dark-input p-6 rounded-xl text-center hover:bg-gray-800 transition-colors group">
                        <span className="text-3xl mb-2 block">😍</span>
                        <span className="text-gray-300 font-medium">Long-term, open to short</span>
                    </button>
                     <button type="button" className="bg-dark-input p-6 rounded-xl text-center hover:bg-gray-800 transition-colors group">
                        <span className="text-3xl mb-2 block">🥂</span>
                        <span className="text-gray-300 font-medium">Short-term, open to long</span>
                    </button>
                     <button type="button" className="bg-dark-input p-6 rounded-xl text-center hover:bg-gray-800 transition-colors group">
                        <span className="text-3xl mb-2 block">🎉</span>
                        <span className="text-gray-300 font-medium">Short-term fun</span>
                    </button>
                     <button type="button" className="bg-dark-input p-6 rounded-xl text-center hover:bg-gray-800 transition-colors group">
                        <span className="text-3xl mb-2 block">👋</span>
                        <span className="text-gray-300 font-medium">New friends</span>
                    </button>
                     <button type="button" className="bg-dark-input p-6 rounded-xl text-center hover:bg-gray-800 transition-colors group">
                        <span className="text-3xl mb-2 block">🤔</span>
                        <span className="text-gray-300 font-medium">Still figuring it out</span>
                    </button>

                </div>

                {/* Save Button */}
                 {/* This button will need an onClick handler to save the selection and close the modal */}
                <button type="button" className="w-full bg-primary text-white rounded-full px-8 py-4 font-medium hover:bg-opacity-90 transition-colors text-lg mt-8">
                    Save
                </button>
            </div>
        </div>
      </div>

    </AuthLayout>
  )
}
