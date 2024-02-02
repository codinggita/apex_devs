import React from 'react'
import "../styles/HomePage.css"
//import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import SideNavBar from '../dashboard/SideNavBar'
import SidebarElement from '../mini/SidebarElement'
import RecipeReviewCard from '../mini/ProjectCard'

const homeCategory = "Angular"

function HomePage() {
  return (
    <div>
      <div className='super-container'>

          {/* SIDE BAR */}
          <div className='side-bar'>

              <div className='nav-side-bar side-bar-block'>
                <h2>Navigation</h2>
                <div className='side-bar-breakline'></div>
                {/* <SidebarElement text='Dashboard' />
                <SidebarElement text='Liked' />
                <SidebarElement text='Recently Visited' /> */}
                <h3>Dashboard</h3>
                <h3>Liked</h3>
                <h3>Recently Visited</h3>
                <h3>MyProjects</h3>
              </div>
              <div className='categories-side-bar side-bar-block'>
                <h2>Categories</h2>
                <div className='side-bar-breakline'></div>
                <h3>Web</h3>
                <h3>Android</h3>
                <h3>iOS</h3>
                <h3>Ui/Ux</h3>
                <h3>Data Science</h3>
                <h3>ML</h3>
                <h3>C/C++</h3>
              </div>
          </div>

          
          <div className='home-body'>
            <div className='home-category'>{homeCategory}</div>
            <div className='home-body-grid'>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomePage


