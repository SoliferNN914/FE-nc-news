import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Link to="/">
            <h1 className='Header'>NC News</h1>
        </Link>
    );
}
