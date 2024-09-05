import axios from "axios";
import { Component } from "react";
import Loaders from "../components/loaders/loader";
import CardDisplay from "../components/loaders/cardcomponent";

class RecipeData extends Component {
    state = {
        recipes: [],
        loading: true,
        error: false,
        selectedRecipe: null, 
    };

    componentDidMount = () => {
        console.log("I'm executed");
        this.FetchData();
    };

    FetchData = async () => {
        try {
            const data = await axios.get('https://dummyjson.com/recipes');
            console.log(data.data.recipes);
            this.setState({
                recipes: data.data.recipes,
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({
                 error: true,
                  loading: false 
                });
        }
    };

    // Handle card click
    handleCardClick = (recipe) => {
        this.setState({ selectedRecipe: recipe });
    };

    render() {
        return (
            <div className="container">
                {this.state.loading ? (
                    <Loaders />
                ) : this.state.error ? (
                    <p>Error fetching data.</p>
                ) : (
                    <div className="row" style={{width:"100%"}}>
                       
                        <div className="col-md-8">
                            <div className="row">
                                {this.state.recipes.map((eachrecipe, id) => (
                                    <div className="row-md-6 mb-4" key={id}>
                                        <div 
                                            className="card" 
                                            style={{ width: '60%', cursor: 'pointer' }} 
                                            onClick={() => this.handleCardClick(eachrecipe)}
                                        >
                                            <img 
                                                src={eachrecipe.image} 
                                                className="card-img-top" 
                                                alt={eachrecipe.name} 
                                                style={{width: '100%', height: 'auto'}}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{eachrecipe.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-4  d-flex  align-items-start">
                            {this.state.selectedRecipe ? (
                                <CardDisplay 
                                    image={this.state.selectedRecipe.image} 
                                    name={this.state.selectedRecipe.name} 
                                />
                            ) : (
                                <p>Please select a recipe .</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default RecipeData;