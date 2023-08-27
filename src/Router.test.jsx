import { cleanup, render, screen} from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import{Router} from "./Router.jsx" 
import { getCurrentPath } from "./utils.js";

vi.mock('./utils.js', ()=> ({
    getCurrentPath: vi.fn()
}))

describe('Router', ()=> {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', ()=>{
        render(<Router routes={[]}/>)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no rutes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>}/> )
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the first component of the first route that matches'), ()=>{
        getCurrentPath.mockReturnValue("/about")
        const routes= [
            {
                path: '/',
                component: ()=> <h1>Home</h1>
            },
            {
                path: '/about',
                component: ()=> <h1>About</h1>
            }
        ]
        render(<Router routes={routes}/>)
        expect(screen.getByText('About')).toBeTruthy()
    }
})