import { ChangeEvent, FC, useContext, useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Grid, Icon, Input, Sticky } from "semantic-ui-react";
import AppContext from "../context/AppContext";
import { Button } from "./main/button";

interface NavbarProps extends RouteComponentProps {
    apiToggle: () => void;
    sidebarToggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ apiToggle, sidebarToggle, history }) => {
    const [query, setQuery] = useState('');
    const { toggleApi } = useContext(AppContext);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const submitSearch = () => {
        history.push(`/results/${query}`)
    }

    return <Sticky>
        <Grid className='navbar' centered columns='equal' padded>
        <Grid.Column className='navbar-sidebar' verticalAlign='middle'>
            <Icon name='sidebar' onClick={sidebarToggle} />
            <Link to='/' className='nav-title'>
            <Icon name='youtube play' />
            <span>YouTube</span>
            </Link>
        </Grid.Column>
        <Grid.Column width={7}>
            <Input className='navbar-searchbar' onChange={e => handleInput(e)}
            action={{ icon: 'search', onClick: () => submitSearch() }}
            placeholder='Search' fluid />
        </Grid.Column>
        <Grid.Column className='navbar-mic' width={1} verticalAlign='middle'>
            <Icon name='microphone' />
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
        {/* <Grid.Column className='navbar-options'> */}
            <Button onClick={apiToggle}>{toggleApi ? 'API On' : 'API Off'}</Button>
            <Icon name='grid layout' />
            <Icon name='ellipsis vertical' />
        </Grid.Column>
        </Grid>
    </Sticky>
}

export default withRouter(Navbar);