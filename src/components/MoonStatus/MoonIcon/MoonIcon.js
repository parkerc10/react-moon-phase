import { useEffect, useState } from 'react';
import Waxing_Crescent from './img/Waxing_Crescent.png';
import First_Quarter from './img/First_Quarter.png';
import Full_Moon from './img/Full_Moon.png';
import Last_Quarter from './img/Last_Quarter.png';
import Waning_Crescent from './img/Waning_Crescent.png';
import New_Moon from './img/New_Moon.png';
import Waning_Gibbous from './img/Waning_Gibbous.png';
import './MoonIcon.css';

const MoonIcon = props => {
  const [iconName, setIconName] = useState(props.moonPhase);

  useEffect(() => moonImageAssign(), []);

  const moonImageAssign = () => {
    switch (props.moonPhase) {
      case 'Waxing Crescent':
        setIconName(Waxing_Crescent);
        break;
      case 'First Quarter':
        setIconName(First_Quarter);
        break;
      case 'Full Moon':
        setIconName(Full_Moon);
        break;
      case 'Last Quarter':
        setIconName(Last_Quarter);
        break;
      case 'Waning Crescent':
        setIconName(Waning_Crescent);
        break;
      case 'New Moon':
        setIconName(New_Moon);
        break;
      case 'Waning Gibbous':
        setIconName(Waning_Gibbous);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <img src={iconName} alt={iconName} />
    </div>
  );
};

export default MoonIcon;
