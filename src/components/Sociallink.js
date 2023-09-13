const Sociallink = ({href,icon,id}) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
}
export default Sociallink