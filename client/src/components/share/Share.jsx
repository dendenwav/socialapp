import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button } from '@material-ui/core';
import { EmojiEmotions, PermMedia } from '@material-ui/icons';
import { toast } from 'react-toastify';
import FileBase from 'react-file-base64';


import useStyles from './ShareStyle';
import { createPost, updatePost } from '../../actions/posts';

export default function Share({ currentId, setCurrentId }) {
    const classes = useStyles();
    const [postData, setPostData] = useState({ message: '', tags: [], selectedFile: '' });
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    const clear = () => {
        setCurrentId(0);
        setPostData({ message: '', tags: [], selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!user)
        {
            toast.error('Connecte-toi pour partager !', {
                position: "bottom-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else if (currentId === 0) {
          dispatch(createPost({ ...postData, userId: user?.result?._id, username: user?.result?.username }));
          clear();
        } else {
          dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
          clear();
        }
    };

    return (
        <div className={classes.shareContainer}>
            <div className={classes.shareWrapper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.shareHeader}>
                        <Avatar className={classes.shareProfileImg} alt={user?.result.username} src={user?.result.imageUrl}>{user?.result.username.charAt(0)}</Avatar>
                        <input placeholder="Partagez vos pensées..." value={postData.message} className={classes.shareInput} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                    </div>
                    <hr className={classes.shareDivider}/>
                    <div className={classes.shareFooter}>
                        <div className={classes.shareOptions}>
                            <div className={classes.shareOption}>
                                <Button component="label" size='small' className={classes.fileButton}>
                                    <PermMedia htmlColor='lightslategrey' className={classes.shareIcon}/>
                                    <span className={classes.shareOptionText}>Importer une Photo</span>
                                    <div className={classes.fileInput}>
                                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                                    </div>
                                </Button>
                            </div>
                            <div className={classes.shareOption}>
                                <EmojiEmotions htmlColor='lightslategrey' className={classes.shareIcon}/>
                                <span className={classes.shareOptionText}>Emoji</span>
                            </div>
                        </div>
                        <button type='submit' className={classes.shareButton}>Share</button>
                    </div>
                </form>
            </div>
        </div>
    )
}