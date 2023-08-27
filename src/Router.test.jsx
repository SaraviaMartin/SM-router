import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import{Router} from "./Router.jsx" 

describe('Router', ()=> {
    it('should render without problems', ()=>{
        render(<Router routes={[]}/>)
        expect(true).toBeTruthy()
    })
})