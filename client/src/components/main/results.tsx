import React, { FC, useContext, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Grid, Image, Item } from 'semantic-ui-react';
// util
import { fetchSearchResults } from '../../util/app_util';
import { loading, timeSincePublished } from '../../util/general_util';
import { SEARCH_RESULTS } from '../../util/search_results';
// context
import AppContext from '../../context/AppContext';

interface ResultsProps extends RouteComponentProps {}

type ResultObject = ({
    kind: string,
    etag: string,
    id: IdObject,
    snippet: SnippetObject
})

type SnippetObject = ({
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: ThumbnailObject,
    channelTitle: string,
    liveBroadcastContent: string,
    publishTime: string
})

type IdObject = ({
    kind: string,
    videoId: string
})

type ThumbnailObject = ({
    default: ThumbnailProps,
    medium: ThumbnailProps
    high: ThumbnailProps
})

type ThumbnailProps = ({
    url: string,
    width: number,
    height: number
})

const Results: FC<ResultsProps> = ({ history }) => {
    const { toggleApi, searchQuery } = useContext(AppContext);
    const [currentQuery, setCurrentQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Array<ResultObject> | undefined>(undefined);

    useEffect(() => {
        // keep track of current search so that when it changes, it will render with the most recent search
        if(toggleApi || searchQuery !== currentQuery){
            fetchSearchResults(10, searchQuery)
                .then(data => {
                    setSearchResults(data.items)
                    setCurrentQuery(searchQuery)
                })
                .catch(err => history.push('/404'))
        }else{
            setSearchResults(SEARCH_RESULTS)
        }
    }, [toggleApi, searchQuery])

    const displayResults = () => {
        return <Grid className='search-results' centered padded>
            {
                // to be added - overlay with buttons for add to queue, add to watch later, and report
                // display on hover
                searchResults!.map((result, idx) => {
                return <Grid.Row key={idx}>
                    <Grid.Column className='result-thumbnail' as={Link} to={`/video/${result.id.videoId}`} width={3} verticalAlign='middle'>
                    <Image src={result.snippet.thumbnails.medium.url} />
                    </Grid.Column>
                    <Grid.Column className='result-details' as={Link} to={`/video/${result.id.videoId}`} width={8}>
                    <Item.Group>
                        <Item.Header className='result-details-header'>
                        {result.snippet.title}
                        </Item.Header>
                        <Item.Description className='result-details-stats'>
                        {/* to be added - view count */}
                        {timeSincePublished(result.snippet.publishTime)}
                        </Item.Description>

                        <Item.Description className='result-details-channel'>
                        {/* to be added - channel icon */}
                        {result.snippet.channelTitle}
                        </Item.Description>

                        <Item.Description className='result-details-summary'>
                        {result.snippet.description}
                        </Item.Description>
                    </Item.Group>
                    </Grid.Column>
                </Grid.Row>
                })
            }
        </Grid>
    }

    return searchResults ? displayResults() : loading;
};

export default Results;