import { gql } from 'apollo-boost';
import React from 'react';
import { Mutation } from 'react-apollo';

const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
        likePhoto(input: $input) {
        id,
        liked,
        likes
        }
    }
`

export const ToogleLikeMutation = ({ children }) => {
    return (
        <Mutation mutation={LIKE_PHOTO}>
            {children}
        </Mutation>
    )
}