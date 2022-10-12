import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Avatar, Box, Container, Paper, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../Hooks/useGetUser";
import {fetchList} from "../../actions/asyncActions/listData";
import {fetchUserData, fetchUsersList} from "../../actions/asyncActions/usersData";
import {fetchMarksList} from "../../actions/asyncActions/marksData";
import axios from "axios";




const ProfilePage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetchUserData(id)
    }, [])

    function fetchUserData(userID) {
        axios.get(`http://127.0.0.1:8000/api/v1/users/${userID}`)
                .then(response => {
                    setUserData(response.data)
                })
                .catch(error => console.log(error))
        }


    return (
            <Box
                sx={{
                    position: 'absolute',
                    top: '44px',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 700,
                        minHeight: 100,
                    },
                    '.css-12bapnq-MuiAvatar-root': {
                        height: 300,
                        width: 200,
                    },
                    '.css-1oqqzyl-MuiContainer-root': {
                        display: 'flex',
                        flexDirection: 'row'
                    }



                }}
            >
                <Paper>
                    <Container>
                    <Avatar src={userData?.ava || 'http://127.0.0.1:8000/media/Avatars/unknown_user.jpg' } alt="" variant='rounded'/>
                    <Typography>{userData.first_name} {userData.last_name}</Typography>
                    </Container>
            </Paper>
            </Box>
    );
};

export default ProfilePage;

