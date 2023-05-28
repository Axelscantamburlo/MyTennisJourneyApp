export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_SEXE = 'SET_USER_SEXE';
export const SET_USER_AGE = 'SET_USER_AGE';
export const SET_USER_SIZE = 'SET_USER_SIZE';
export const SET_USER_WEIGHT = 'SET_USER_WEIGHT';
export const SET_USER_LEVEL_PLAYEUR = 'SET_USER_LEVEL_PLAYEUR';
export const SET_USER_RANKING = 'SET_USER_RANKING';
export const SET_USER_RANKING_GOAL = 'SET_USER_RANKING_GOAL';
export const SET_USER_GOALS = 'SET_USER_RANKING_GOAL';

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

export const setSexe = sexe => dispatch => {
    dispatch({
        type: SET_USER_SEXE,
        payload: sexe
    })
}

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age
    })
}
export const setSize = size => dispatch => {
    dispatch({
        type: SET_USER_SIZE,
        payload: size
    })
}
export const setWeight = weight => dispatch => {
    dispatch({
        type: SET_USER_WEIGHT,
        payload: weight
    })
}
export const setLevelPlayeur = levelPlayeur => dispatch => {
    dispatch({
        type: SET_USER_LEVEL_PLAYEUR,
        payload: levelPlayeur
    })
}
export const setRanking = ranking => dispatch => {
    dispatch({
        type: SET_USER_RANKING,
        payload: ranking
    })
}
export const setRankingGoal = rankingGoal => dispatch => {
    dispatch({
        type: SET_USER_RANKING_GOAL,
        payload: rankingGoal
    })
}
