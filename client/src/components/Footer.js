import React from 'react'
import styled from 'styled-components'
import facebook_icon from '../assets/facebook_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import youtube_icon from '../assets/youtube_icon.png'
import instagram_icon from '../assets/instagram_icon.png'

const Footer = () => {
    return (
        <FooterConatiner>
            <div className='footer-icons'>
                <img src={facebook_icon} alt='facebook_icon' />
                <img src={twitter_icon} alt='twitter_icon' />
                <img src={youtube_icon} alt='youtube_icon' />
                <img src={instagram_icon} alt='instagram_icon' />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className='copyright-text'>All content © 2024 Netflix, Inc. All rights reserved. The use of this material is subject to the terms of use and privacy policy.</p>
        </FooterConatiner>
    )
}

const FooterConatiner = styled.div`
    margin: 6rem 15rem;
    .footer-icons {
        display: flex;
        gap: 1rem;
        margin: 40px 0;
        img{
            width: 30px;
            cursor: pointer;
        }
    }
    ul {
        display: grid;
        grid-template-columns: auto auto auto auto;
        column-gap: 2rem;
        row-gap: 1rem;
        margin-bottom: 2rem;
        list-style: none;
    }
    .copyright-text {
        color: gray;
        font-size: 14px;
    }
`

export default Footer