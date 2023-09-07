import { SignOutButton, useUser } from '@clerk/clerk-react';
import Modal from '../modal/Modal';

const Header = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className='h-16 w-full fixed top-0 bg-purple-950 z-10 flex items-center justify-between px-20'>
      {/* Game Logo */}
      <img
        src='https://img.freepik.com/premium-vector/purple-snake-mascot-gaming-logo-template-esports-streamer-facebook-youtube_78159-156.jpg?w=2000'
        alt=''
        className='h-12 w-12 rounded-full object-contain'
      />

      {/* User Info/Sign in button */}
      {isSignedIn ? (
        <div className='flex items-center space-x-2'>
          <img
            src={user.imageUrl}
            alt=''
            className='h-12 w-12 rounded-full object-contain'
          />
          <div className='rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <SignOutButton />
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </div>
  );
};

export default Header;
