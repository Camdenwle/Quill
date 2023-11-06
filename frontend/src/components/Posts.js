import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';

const Posts = (props) => {
    const { posts } = props;
    if(!posts || posts.length === 0) return <p>You don't have any saved contracts</p>
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {posts.map((post) => {
                        return (
                            <Grid item key={posts.id} xs={12} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {post.title.substr(0,50)}...
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {post.content.substr(0,60)}...
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
            </Container>
        </React.Fragment>
    );
}

// const Post = (props) => {
// 	const { posts } = props;
// 	const classes = StyledCard();
// 	if (!posts || posts.length === 0) return <p>You don't have any saved contracts</p>;
// 	return (
// 		<React.Fragment>
// 			<Container maxWidth="md" component="main">
// 				<Grid container spacing={5} alignItems="flex-end">
// 					{posts.map((post) => {
// 						return (
// 							// Enterprise card is full width at sm breakpoint
// 							<Grid item key={post.id} xs={12} md={4}>
// 								<Card className={classes.card}>
// 									<CardMedia
// 										className={classes.cardMedia}
// 										image="https://source.unsplash.com/random"
// 										title="Image title"
// 									/>
// 									<CardContent className={classes.cardContent}>
// 										<Typography
// 											gutterBottom
// 											variant="h6"
// 											component="h2"
// 											className={classes.postTitle}
// 										>
// 											{post.title.substr(0, 50)}...
// 										</Typography>
// 										<div className={classes.postText}>
// 											<Typography
// 												component="p"
// 												color="textPrimary"
// 											></Typography>
// 											<Typography variant="p" color="textSecondary">
// 												{post.excerpt.substr(0, 60)}...
// 											</Typography>
// 										</div>
// 									</CardContent>
// 								</Card>
// 							</Grid>
// 						);
// 					})}
// 				</Grid>
// 			</Container>
// 		</React.Fragment>
// 	);
// };

export default Posts;
