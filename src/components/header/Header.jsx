import { SignOutButton, useUser } from '@clerk/clerk-react';

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
    </div>
  );
};

export default Header;
