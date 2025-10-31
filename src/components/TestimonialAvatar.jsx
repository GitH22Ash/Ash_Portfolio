const TestimonialAvatar = ({ imgPath, name }) => {
  const getInitials = (name) => {
    if (!name) return '?';
    const words = name.split(' ');
    if (words.length >= 2) {
      return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
    }
    return name.charAt(0).toUpperCase();
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const fallback = e.target.nextElementSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <div className="w-12 h-12 relative flex-shrink-0">
      {imgPath && (
        <img
          src={imgPath}
          alt={name || "User"}
          className="w-full h-full rounded-full object-cover"
          onError={handleImageError}
        />
      )}
      <div 
        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg absolute top-0 left-0"
        style={{ display: imgPath ? 'none' : 'flex' }}
      >
        {getInitials(name)}
      </div>
    </div>
  );
};

export default TestimonialAvatar;