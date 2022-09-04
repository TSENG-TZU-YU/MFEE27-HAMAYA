import { matchRoutes } from 'react-router-config';
import routes from './routes';

const Breadcrumb = ({ locationPath }) => {
    let matchedRoutes = matchRoutes(routes, locationPath);

    return (
        <nav>
            <ol className="breadcrumb">
                {matchedRoutes.map((matchRoute, i) => {
                    const { path, breadcrumbName } = matchRoute.route;
                    const isActive = path === locationPath;

                    return isActive ? (
                        <li key={i} className="breadcrumb-item active">
                            {breadcrumbName}
                        </li>
                    ) : (
                        <li key={i} className="breadcrumb-item"></li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
