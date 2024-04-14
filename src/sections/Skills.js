import { forwardRef } from "react"

// import SnappableSection from "../components/SnappableSection"
import Card from "../components/Card";


const SkillsSection = forwardRef((_, ref) => {
    return (
        // <>
        // </>
        // <SnappableSection id='Projects' ref={ref}>
        <section 
            id = 'Skills'
            className = 'flex-container column'
        >
            <Card className = 'flex-container-centered column'>
                <h2> 🚧 Coming soon</h2>
                {/* <table>
                    <tr>
                        <th> Languages </th>
                        <th> Frameworks </th>
                    </tr>
                    <tr>
                        <td> HTML/CSS </td>
                    </tr>
                    <tr>
                        <td> Javascript </td>
                    </tr>
                    <tr>
                        <td> C/C++</td>
                    </tr>
                    <tr>
                        <td> Python </td>
                    </tr>
                </table> */}
            </Card>
        </section>
        
        // </SnappableSection>
    );
});

export default SkillsSection

