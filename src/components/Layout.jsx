const Layout = ({ children }) => {
  return (
    <div className='h-screen'>
      <div className='bg-custom-gradient min-h-full min-w-full flex items-center justify-center'>
        <div className='flex flex-col items-center min-w-[990px] max-w-[990px] mt-16'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
