import React from 'react'
import './StoryList.scss'

const StoryList = ({ stories, setStory, setStoryDT }) => {

    const clicked = (story) => {
        setStory(true)
        setStoryDT(story)
    }

    return (
        <div class="story-list">
            <div class="collection z-depth-1">
                <div class="main-title">Stories</div>
                {
                    stories.map((story, index) =>
                        <div class="collection-item avatar" onClick = {() => {clicked(story)}}>
                            <img src={story.avatarUrl} alt="" class="circle" />
                            <b class="title">{story.name}</b>
                            <p class="time">{Math.round(Math.random() * 24)} Hours Ago</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default StoryList;