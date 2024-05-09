/**
 * Renders a team widget with a header and a list of team members.
 *
 * @param {TeamProps} props - The props for the Team component.
 * @param {string} props.header - The header text for the team widget.
 * @param {Array<Object>} props.teams - The array of team members.
 * @param {string} props.id - The ID of the team widget.
 * @param {boolean} props.hasBackground - Indicates whether the team widget has a background.
 * @returns {JSX.Element} The rendered Team component.
 */
import Headline from '../common/Headline';
import { TeamProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemTeam from '../common/ItemTeam';

const Team = ({ header, teams, id, hasBackground = false }: TeamProps) => (
  // The WidgetWrapper component wraps the Team component.
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {/* The WidgetWrapper component has an ID and a container class. */}
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    {/* The header is displayed if it exists. */}
    <div className="flex items-stretch justify-center">
      <div className="grid grid-cols-1 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {teams.map(
          (
            { name, occupation, image, items },
            index, // The team members are mapped to the ItemTeam component.
          ) => (
            <div key={`item-team-two-${index}`} className="p-2">
              <ItemTeam
                name={name} // The name of the team member.
                occupation={occupation} // The occupation of the team member.
                image={image} // The image of the team member.
                items={items} // The items of the team member.
                containerClass="card flex flex-col justify-center w-full px-8 my-12 text-center" // The container class for the team member.
                imageClass="self-center flex-shrink-0 w-36 h-36 -mt-20 bg-center bg-cover rounded-full dark:bg-gray-500 ring-4 ring-gray-300 object-cover" // The image class for the team member.
                panelClass="flex-1 mt-6" // The panel class for the team member.
                nameClass="text-base font-semibold text-dark" // The name class for the team member.
                occupationClass="text-sm text-body-color" // The occupation class for the team member.
                itemsClass="flex justify-center relative px-3 pt-5 mx-5 overflow-hidden" // The items class for the team member.
              />
            </div>
          ),
        )}
      </div>
    </div>
  </WidgetWrapper>
);

export default Team;
