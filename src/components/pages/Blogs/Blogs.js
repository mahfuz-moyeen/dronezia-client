import React, { useState } from 'react';
import blog1 from '../../../image/blog/blog (4).jpg'
import blog2 from '../../../image/blog/blog (2).jpg'
import blog3 from '../../../image/blog/blog (1).jpg'
import blog4 from '../../../image/blog/blog (3).jpg'
import { ChevronUpIcon } from '@heroicons/react/solid';
const Blogs = () => {
    const [scroll, setScroll] = useState(false)

    //scroll to  top
    window.onscroll = function () { scrollFunction() };
    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='lg:w-11/12 mx-auto'>
            <h1 className='text-center my-10 text-4xl'>blogs</h1>

            <div className='w-11/12 Lg:w/8/12 mx-auto'>
                <div class="card card-side  flex flex-col lg:flex-row my-5 bg-base-100 shadow-xl">
                    <div ><img src={blog1} width={500} alt="Movie" className='h-full w-fit' /></div>
                    <div class="card-body">
                        <h2 class="card-title">Difference between javascript and nodejs</h2>
                        <p>JavaScript is a language that runs inside a web browser as part of a document loaded by a browser. It treats your pages (HTML gives semantic structure, CSS forms or looks and feel). However, JavaScript should not be limited to just running inside the browser. Now that it is an interpreted language, it needs an interpreter to run it The V8 is the Google Chrome JS engine and the 'node' is a front-end that can be used to run JavaScript scripts outside the browser. Node.js or just Node usually refers to a collection of objects and methods available in your JavaScript code when running on V8 or through a node interpreter. It is a JavaScript library and runtime.</p>
                    </div>
                </div>
                <div class="card card-side flex flex-col lg:flex-row  my-5 bg-base-100 shadow-xl">
                    <div><img className='h-full' src={blog2} width={500} alt="Movie" /></div>
                    <div class="card-body">
                        <h2 class="card-title">Differences between sql and nosql databases.</h2>
                        <p># Sql is relatonal database and nosql database is non-relational or distributed database.
                            <br />
                            # Sql database structure is table-based and nosql database structure is key-value pairs,document based,graph database,wide-column stores.
                            <br>
                            </br>
                            # Sql's scaling is typically achieved horizontaly with data partitioned to span servers and nonsql;s scaling is typically achieved vertically with more server resources.
                            <br />
                            # Sql's schema static nosql schema synamic.
                            <br />
                            # Sql is structured query language and nosql is un-structured query language.</p>
                    </div>
                </div>
                <div class="card card-side flex flex-col lg:flex-row  my-5 bg-base-100 shadow-xl">
                    <div><img className='h-full' src={blog3} width={500} alt="Movie" /></div>
                    <div class="card-body">
                        <h2 class="card-title">When should you use nodejs and when should you use MongoDB.</h2>
                        <p>NodeJS is a JavaScript runtime environment. It actually helps JavaScript to run outside of the server. It's used in server-side development. When any project needs a javascript programming language and a runtime library and needs to compile or interpret code that time we should use nodejs. Node.js is such as tools for javascript language.
                            <br />
                            MongoDB is a NoSQL database that is document-oriented. It represents data as JSON documents. It's used to store data. when any project needs the ability to persistently store data, update data, and delete data that time we should use MongoDB.
                        </p>
                    </div>
                </div>
                <div class="card card-side flex flex-col lg:flex-row  my-5 bg-base-100 shadow-xl">
                    <div><img className='h-full' src={blog4} width={500} alt="Movie" /></div>
                    <div class="card-body">
                        <h2 class="card-title">What is the purpose of jwt and how does it work</h2>
                        <p>JWTs (JSON web tokens, pronounced 'jot') are becoming a popular way to manage authentication. For authentication purposes, a JWT is a token that is issued by the server The token contains a JSON payload containing user-specific information. This token can be used by clients when communicating with the API (by sending it as an HTTP header) so that the APIs can identify the user represented by the token and take user-specific action.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${scroll ? 'block' : 'hidden'} w-10/12 lg:w-full mx-auto flex justify-end sticky bottom-3`}>
                <button
                    onClick={() => topFunction()}
                    className='p-1 rounded-lg bg-indigo-600 hover:bg-indigo-700'>
                    <ChevronUpIcon className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                </button>
            </div>
        </div>
    );
};

export default Blogs;