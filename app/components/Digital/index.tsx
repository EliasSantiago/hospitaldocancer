import PropTypes from "prop-types";

interface DigitalProps {
  title: string;
  description: string;
  buttonText?: string; // Tornando buttonText opcional com ?
  backgroundImgSrc: string;
  imageAlt: string;
}

const Digital: React.FC<DigitalProps> = ({ title, description, buttonText, backgroundImgSrc, imageAlt }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImgSrc})`,
  };

  return (
    <div className="mx-2">
      <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl relative' style={backgroundImageStyle}>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>
          {/* COLUMN-1 */}
          <div className="pt-24 lg:pl-24">
            <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">{title}</h3>
            <h4 className="text-4xl sm:text-6xl font-bold text-white leading-snug text-center lg:text-start">{description}</h4>
            {buttonText && (
              <div className="text-center lg:text-start">
                <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">{buttonText}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Digital.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string, // Remova o .isRequired para buttonText
  backgroundImgSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default Digital;