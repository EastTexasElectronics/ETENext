import { HoverEffect } from "../components/ui/card-hover-effect";

export function ManagedDigitalAssets() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

const ServiceGrid:React.FC = () => {
  const [service, setServices] = useState ([]);
}


const ServiceGrid: React.FC = () => {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState('');
  const [serviceUrl, setServiceUrl] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('/api/services');
      setServices(response.data);
    };

    fetchServices();
  }, []);
