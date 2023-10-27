import Image from 'next/image';
import github from '../../public/icons/github-icon.svg';
import x from '../../public/icons/x-icon.svg';
import linkedIn from '../../public/icons/linkedin-icon.png';

const SocialIcons = () => (
  <div className="flex gap-4">
    <a href="https://github.com/ColtenVanTussenbrook" target="_blank">
      <Image src={github} alt="github icon" width={24} height={24} />
    </a>
    <a href="https://twitter.com/coltvant" target="_blank">
      <Image src={x} alt="X twitter icon" width={24} height={24} />
    </a>
    <a href="https://www.linkedin.com/in/coltenvantussenbrook/" target="_blank">
      <Image src={linkedIn} alt="LinkedIn icon" width={24} height={24} />
    </a>
  </div>
);

export default SocialIcons;
