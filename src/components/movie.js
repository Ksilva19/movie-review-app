import React from 'react';
import ReviewForm from './review-form';
import ReviewList from './review-list';
import Stars from './stars';

export default class Movie extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                SHANG-CHI AND THE LEGEND OF THE TEN RINGS (2021)
                </div>
                <div className="card-body">
                    <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/222997/FND_poster_ShangChi_InTheaters.jpg" />
                </div>
                <div className="card-body">
                    <p>Marvel Studios’ “Shang-Chi and The Legend of The Ten Rings” stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi’s friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng’er Zhang, Florian Munteanu and Ronny Chieng.</p>
                    <p>GENRE:  Action/Adventure</p>
                </div>
                <div className="card-body">
                    Rating
                    <Stars />
                </div>
                <div className="card-footer">
                    <ReviewForm />
                    <button
                        className="btn btn-primary">
                            <label>Submit</label>
                    </button>
                </div>
                <div>
                    <ReviewList />
                </div>
                
                <div className="card-header bg-primary text-white">
                VENOM: LET THERE BE CARNAGE (2021)
                </div>
                <div className="card-body">
                    <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/223021/FND_poster_VenomLTBC_PreSale.jpg" />
                </div>
                <div className="card-body">
                    <p>Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL’s greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.</p>
                    <p>GENRE:  Action/Adventure,  Suspense/Thriller</p>
                </div>
                <div className="card-body">
                    Rating
                    <Stars />
                </div>
                <div className="card-footer">
                    <ReviewForm />
                    <button
                        className="btn btn-primary">
                            <label>Submit</label>
                    </button>
                </div>
                <div>
                    <ReviewList />
                </div>

                <div className="card-header bg-primary text-white">
                THE ADDAMS FAMILY 2 (2021)
                </div>
                <div className="card-body">
                    <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/224124/FND_poster_AddamsFamily2_PreSale.jpg" />
                </div>
                <div className="card-body">
                    <p>Everyone’s favorite spooky family is back in the animated comedy sequel, The Addams Family 2. In this all new movie we find Morticia and Gomez distraught that their children are growing up, skipping family dinners, and totally consumed with “scream time.” To reclaim their bond they decide to cram Wednesday, Pugsley, Uncle Fester and the crew into their haunted camper and hit the road for one last miserable family vacation. Their adventure across America takes them out of their element and into hilarious run-ins with their iconic cousin, IT, as well as many new kooky characters. What could possibly go wrong?</p>
                    <p>GENRE:  Animated,  Comedy</p>
                </div>
                <div className="card-body">
                    Rating
                    <Stars />
                </div>
                <div className="card-footer">
                    <ReviewForm />
                    <button
                        className="btn btn-primary">
                            <label>Submit</label>
                    </button>
                </div>
                <div>
                    <ReviewList />
                </div>
                
            </div>
        );
    }
}