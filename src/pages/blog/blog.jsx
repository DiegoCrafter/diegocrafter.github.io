import React from 'react'
import construction from '../../img/construction.png'

const Blog = () => {
    return (
        <div class="page pt-blog" data-simplebar>
            <section class="container">

                <div class="header-page mt-70 mob-mt">
                    <h2>Blog</h2>
                    <span></span>
                </div>

                <div class='container mt-70 ml-70'>
                    <img src={construction} alt=''/>
                </div>

                <div class="row mt-100 mb-90">
                    <div class="col-lg-12 col-sm-12 text-center">
                        <a href="blog-list.html" class="btn-st" rel="noreferrer">My Blog</a>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Blog