import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHandler = (id) => {
        this.props.history.push({
            pathname: '/courses/' + id
        });
    }

    render () {
        const courses = <div>
            <h1>Amazing Udemy Courses</h1>
            <section className="Courses">
                {
                    this.state.courses.map(course => {
                        return (
                            <article 
                                className="Course" 
                                key={course.id}>
                                    <NavLink 
                                        to={{
                                            pathname: this.props.match.url + "/" + course.id,
                                            search: "?title=" + course.title
                                        }}
                                    >
                                        {course.title}
                                    </NavLink>
                            </article>);
                    })
                }
            </section>
        </div>;

        return (
            <div>
                {courses}
                <Route path={this.props.match.url + '/:id'} exact component={Course} />
            </div>
        );
    }
}

export default Courses;