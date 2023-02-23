import {render, screen, waitFor} from "@testing-library/react"
import Users from "./pages/Users"

test("Render halaman users dengan benar", async()=>{
    render(<Users/>)

    const btn = screen.getByROle('buttn')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent('Back To Home')

    const user = await waitFor(()=>{
        return screen.findByText('Leanne Graham')
    },{timeout : 5000})
    expect(user).toBeInTheDocument() 
})