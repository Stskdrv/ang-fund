Home Task
The goal of this task is to create NGRX store, actions, reducers and effects, in a word you will try to implement Redux + Effects architecture in Angular app.

Prerequisite
Before you start, you need to install NGRX store, store-devtools, effects and router-store libraries:

npm install @ngrx/{store,effects,store-devtools} --save

1. Create initial boilerplate
   Create initial boilerplate:

Create src/app/store folder.
Create src/app/store/index.ts file.
Create such entities in previously created index.ts:
empty interface State.
empty constant which should be exported: reducers: ActionReducerMap<State>.
empty constant which should be exported: effects.
Add NGRX imports to app.module.ts:
StoreModule.forRoot(reducers) - reducers should be imported from previously created index.ts
EffectsModule.forRoot(effects) - effects should be imported from previously created index.ts
Setup store-devtools for debugging purposes. 2. Add User's store & effects
Add User's store & effects:

Create src/app/user/store folder. This folder should include all the user store related files.
Create user actions:
create actions file - user.actions.ts.
create following actions: requestCurrentUser, requestCurrentUserSuccess, requestCurrentUserFail.
Create user reducer and state:
create reducer file - user.reducer.ts.
create const userFeatureKey which should contain name of the store feature and should be exported.
create UserState interface which should include isAdmin and name fields.
create initialState: UserState with initial values for the state.
create reducer with help of createReducer function, initialState and earlier create actions. Reducer should handle requestCurrentUserSuccess action and set new data to the state.
wrap reducer to arrow function - export const userReducer = (state: UserState, action: Action): UserState => reducer(state, action);
Create selectors:
create selectors file - user.selectors.ts.
create such selectors: getName, isAdmin
Create effects:
create effects file - user.effects.ts.
create getCurrentUser$ effect which should use UserService and on requestCurrentUser action make getCurrentUser API call, then in case of success it should return requestCurrentUserSuccess({ user }) action and requestCurrentUserFail in case of error.
Create facade for encapsulation store selection and action dispatching: - create facade file - user.facade.ts. - create injectable class UserStateFacade inside previous created file. - create public observable properties (this.store.pipe(select(...))): name$, isAdmin$. - create getCurrentUser(): void method which should dispatch requestCurrentUser action. 3. Add Auth store & effects
Add Auth store & effects:

Create src/app/auth/store folder. This folder should include all the auth store related files.
Create auth actions:
create actions file - auth.actions.ts
create following actions: requestLogin, requestLoginSuccess, requestLoginFail, requestRegister, requestRegisterSuccess, requestRegisterFail, requestLogout, requestLogoutSuccess.
Create auth reducer and state:
create reducer file - auth.reducer.ts
create const authFeatureKey which should contain name of the store feature and should be exported.
create AuthState interface which should include isAuthorized, token and errorMessage.
create initialState: AuthState with initial values for the state.
create reducer with help of createReducer function, initialState and earlier created actions.
wrap reducer to arrow function - export const authReducer = (state: AuthState, action: Action): AuthState => reducer(state, action);
Create selectors:
create selectors file - auth.selectors.ts.
create such selectors: isUserAuthorized, getToken, getSpecificErrorMessage (login / registration),
Create effects:
create effects file - auth.effects.ts.
create login$ effect which should use authService and on requestLogin action call login service method, then in case of success it should return requestLoginSuccess({ token }) action and requestLoginFail({errorMessage }) in case of error.
Create facade for encapsulation store selection and action dispatching:
create facade file - auth.facade.ts.
create injectable class AuthStateFacade inside previous created file.
create public observable properties (this.store.pipe(select(...))): isAuthorized$, getToken$, getLoginErrorMessage$, getRegisterErrorMessage$.
create following methods which should dispatch actions: login(body: User) -> requestLogin({ body }), register(body: User) -> requestRegister({body}), logout -> requestLogout, closeSession -> requestLogoutSuccess, setAuthorization -> requestLoginSuccess({ token: sessionStorage.getToken() }) 4. Add Author's store & effects
Add Author's store & effects:

Create src/app/store/authors folder. This folder should include all the authors store related files.
Create authors actions:
create actions file - authors.actions.ts.
create following actions: requestAuthors, requestAuthorsSuccess, requestAuthorsFail, requestAddAuthor, requestAddAuthorSuccess, requestAddAuthorFail, resetAddedAuthor.
Create authors reducer and state:
create reducer file - authors.reducer.ts.
create const authorsFeatureKey which should contain name of the store feature and should be exported.
create AuthorsState interface which should include authors and addedAuthor.
create initialState: AuthorsState with initial values for the state.
create reducer with help of createReducer function, initialState and earlier created actions.
wrap reducer to arrow function - export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);.
Create selectors:
create selectors file - authors.selectors.ts
create such selectors: getAddedAuthors, getAuthors.
Create effects:
create effects file - authors.effects.ts
create getAuthors$ effect which should use authorsService and on requestAuthors action call getAll service method, then in case of success it should return requestAuthorsSuccess({ authors }) action and requestAuthorsFail in case of error.
create addAuthor$ effect which should use authorsService and on requestAddAuthor action call addAuthor service method, then in case of success it should return requestAddAuthorSuccess({ author }) and requestAddAuthorFail in case of error.
Create facade for encapsulation store selection and action dispatching:
create facade file - authors.facade.ts
create injectable class AuthorsStateFacade inside previous created file.
create public observable properties (this.store.pipe(select(...))): addedAuthor$, authors$.
create following methods which should dispatch actions: getAuthors -> requestAuthors, addAuthor(author: Author) -> requestAddAuthor({ author }). 4. Add Course's store & effect
Add Course's store & effects:

Create src/app/store/courses folder. This folder should include all the courses store related files

Create courses actions:

create actions file - courses.actions.ts
create following actions: requestAllCourses, requestAllCoursesSuccess, requestAllCoursesFail, requestSingleCourse, requestSingleCourseSuccess, requestSingleCourseFail, requestFilteredCourses, requestFilteredCoursesSuccess, requestDeleteCourse, requestDeleteCourseFail, requestEditCourse, requestEditCourseSuccess, requestEditCourseFail, requestCreateCourse, requestCreateCourseSuccess, requestCreateCourseFail.
Create courses reducer and state:

create reducer file - courses.reducer.ts
create const coursesFeatureKey which should contain name of the store feature and should be exported.
create CoursesState interface which should include: allCourses, courses, course, isAllCoursesLoading, isSingleCourseLoading, isSearchState, errorMessage.
create initialState: CoursesState with initial values for the state.
create reducer with help of createReducer function, initialState and earlier created actions.
wrap reducer to arrow function - export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reduce (state, action);.
Create Selectors:

create selectors file - courses.selectors.ts.
create such selectors: isAllCoursesLoadingSelector, isSearchingStateSelector, isSingleCourseLoadingSelector, getCourses, getAllCourses, getCourse, getErrorMessage.
Create effects:

create effects file - courses.effects.ts.
create getAll$ effect which should use coursesService's getAll method and authorsStateFacade to get all courses and map authors ids/hashes to names/data. It should be triggered on requestAllCourses action and in case of success return requestAllCoursesSuccess({ courses }) and requestAllCoursesFail.
create filteredCourses$ effect which should use coursesStateFacade and its allCourses$ public property to get courses and filtered them according to searchValue from the requestFilteredCourses. After filtering courses effect should return requestFilteredCoursesSuccess({ courses }).
create getSpecificCourse$ effect which should use coursesService with its getSpecificCourse method and authorsStateFacade with its authors$ public property to get specific course and replace authors id/hash by its name/data. Effect should be triggered by getSpecificCourse action and in case of success return requestSingleCourseSuccess({ course }) and requestSingleCourseFail in case of error.
create deleteCourse$ effect which should use coursesService with its deleteCourse method to delete course. Effect should be triggered on requestDeleteCourse action and return requestAllCourses in case of success and requestDeleteCourseFail in case of error.
create editCourse$ effect which should use courseService with its editCourse method to edit course. Efffect should be triggered on requestEditCourse and return requestEditCourseSuccess in case of success and requestEditCourseFail in case of error.
create createCourse$ effect which should use courseService with its createCourse method to create course. Effect should be triggered on requestCreateCourse action and return requestCreateCourseSuccess action in case of success or requestCreateCourseFail action in case of error.
create redirectToTheCoursesPage$ which should navigate to courses page and triggered on requestCreateCourseSuccess, requestEditCourseSuccess and requestSingleCourseFail actions. You will need to use { dispatch: false } as an effect config.
Create facade for encapsulation store selection and action dispatching:

create facade file - courses.facade.ts.
create injectable class CoursesStateFacade inside previous created file.
create public observable properties (this.store.pipe(select(...))): isAllCoursesLoading$, isSingleCourseLoading$, isSearchingState$, courses$, allCourses$, course$, errorMessage$.
create following methods which should dispatch actions: getAllCourses -> requestAllCourses, getSingleCourse(id) -> requestSingleCourse({ id }), getFilteredCourses(searchValue) -> requestFilteredCourses({ searchValue }), editCourse(body, id) -> requestEditCourse({ body, id }), createCourse(body) -> requestCreateCourse({ body }), deleteCourse(id) -> requestDeleteCourse({ id }). 6. Replace all the mocks/services with real
EXPLANATION
Finish app transformation and replace all the mocks/services inside components/features to facades usage. Actions should not dispatched directly, only with help of facades. Store selections should not be used directly, only with help of facades. The app should work as expected.
