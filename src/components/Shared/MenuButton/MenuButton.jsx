import './MenuButton.scss';

export default function MenuButton({children, onSelect}) {
 
  return(
    <li><button onClick={onSelect}>{children}</button></li>
  )
}