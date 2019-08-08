import React, { Component } from 'react'
import db from '../firebase'
import { Link } from 'react-router-dom'
import uuid from 'uuid/v4'
import { Form, InputGroup, Button } from 'react-bootstrap'

class Home extends Component {
      state = { 
            posts: [  ],
            title: ''
       }

      componentDidMount() {
            db.ref( '/posts' ).on( 'value', ( snapshot ) => { 
                  let posts = []
                  snapshot.forEach( ( childSnapshot ) => { 
                        posts.push( { ...childSnapshot.val(), key: childSnapshot.key } )
                   }  )
                  this.setState( { posts } ) 
             } )
      }

      onChange = ( e ) => { 
            this.setState( {
                  [ e.target.name ]: e.target.value
            } )
       }

      onSubmit = ( e ) => { 
            e.preventDefault()
            const newid = uuid()
            if ( this.state.title === "" ) return;
            db.ref( `post/${ newid }` ).set( { 
                  title: this.state.title,
                  body: ''
             } ).then( res => { 
                   this.props.history.push( `/post/${ newid }` )
              } ).catch( err => console.log( err ) )
       } 

      render() { 
            console.log(this.state.posts)
            return ( 
                  <div>
                        <h1 className='mt-4 mb-4 text-center'>Create or edit a post</h1>
                        <Form onSubmit={ this.onSubmit }>
                              <InputGroup className='mb-3'>
                                    <Form.Control type='text' name='title' placeholder='Create a post...' value={ this.state.title } onChange={ this.onChange } />
                                    <InputGroup.Append>
                                          <Button variant='success' type='submit'>
                                                Create
                                          </Button>
                                    </InputGroup.Append>
                              </InputGroup>
                        </Form>
                        <div className='text-center'>
                              { this.state.posts.map(  post  => ( 
                                    <div className='my-4' key={ post.key }>
                                          <Link to={ `/post/${ post.key }` } className='post-link' >
                                                <h2>{ post.title }</h2>
                                                <hr />
                                          </Link>
                                    </div>
                               ) ) }
                        </div>
                  </div>
             )
      }
}
 
export default Home