import  {  SunIcon, MoonIcon } from 'lucide-react'
import { useTheme } from '../Overlay/Themecontext'
import { Switch } from '@nextui-org/react'

const ModeTogglemode: React.FC = () => {
       const { theme, toggleTheme } = useTheme();

       return(
              <Switch
              checked={ theme === 'dark' }
              onChange={toggleTheme}
              size="lg"
              color='secondary'
              startContent={<SunIcon />}
              endContent={<MoonIcon />}
              />
       )
}

export default ModeTogglemode