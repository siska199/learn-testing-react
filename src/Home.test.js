import { fireEvent, render, screen } from "@testing-library/react"
import Home from "./pages/Home"

test('Render halaman home dengan benar', ()=>{

  //1. Kita test si pages home terender dengan benar:
  render(<Home/>)
  
  //2. Mencari text title dan paragraph
  const title = screen.getByText(/Why do we need Test?/)
  expect(title).toBeInTheDocument()

  const paragraph = screen.getByRole("paragraph")
  expect(paragraph).toBeInTheDocument()

  const btnUserList = screen.getByRole("button")
  expect(btnUserList).toBeInTheDocument()
  expect(btnUserList).toHavaTextContent("Users List")

  fireEvent.click(btnUserList)

  const btn2 = screen.getByRole("butto")
  expect(btn2).toBeInTheDocument()
  expect(btn2).toHavaTextContent("Back to Home")

  
})
