import {
  Baby,
  Palette,
  Music,
  BookOpen,
  Dumbbell,
  FlaskConical,
  Globe,
  Calculator,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Classes', to: '/classes' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

export const homeVariants = [
  { label: 'Home 1', to: '/' },
  { label: 'Home 2', to: '/home-2' },
  { label: 'Home 3', to: '/home-3' },
  { label: 'Home 4', to: '/home-4' },
];

export const classes = [
  {
    title: 'Nursery',
    age: '1.5 – 3 yrs',
    desc: 'A gentle first step into a world of sensory play, songs and cuddles.',
    color: 'berry',
    icon: Baby,
    image: 'https://images.pexels.com/photos/8612970/pexels-photo-8612970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Art & Craft',
    age: '3 – 5 yrs',
    desc: 'Little hands explore colour, clay and creativity through guided projects.',
    color: 'sunny',
    icon: Palette,
    image: 'https://images.pexels.com/photos/8535198/pexels-photo-8535198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Music & Movement',
    age: '2 – 4 yrs',
    desc: 'Rhythm, rhyme and dance build confidence and coordination.',
    color: 'sky',
    icon: Music,
    image: 'https://images.pexels.com/photos/8422148/pexels-photo-8422148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Language Arts',
    age: '4 – 6 yrs',
    desc: 'Stories, phonics and early reading in a joyful, print-rich room.',
    color: 'grass',
    icon: BookOpen,
    image: 'https://images.pexels.com/photos/8422132/pexels-photo-8422132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Mini Sports',
    age: '3 – 6 yrs',
    desc: 'Running, jumping and team games that grow strong, happy bodies.',
    color: 'brand',
    icon: Dumbbell,
    image: 'https://images.pexels.com/photos/8613146/pexels-photo-8613146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Little Scientists',
    age: '4 – 6 yrs',
    desc: 'Bubbles, magnets and mini experiments spark curious questions.',
    color: 'sky',
    icon: FlaskConical,
    image: 'https://images.pexels.com/photos/8088099/pexels-photo-8088099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'World Explorers',
    age: '5 – 7 yrs',
    desc: 'Globes, maps and cultures open a window to the big wide world.',
    color: 'grass',
    icon: Globe,
    image: 'https://images.pexels.com/photos/8422164/pexels-photo-8422164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Number Club',
    age: '4 – 6 yrs',
    desc: 'Counting, patterns and puzzles make maths feel like play.',
    color: 'sunny',
    icon: Calculator,
    image: 'https://images.pexels.com/photos/8612925/pexels-photo-8612925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const teachers = [
  {
    name: 'Olivia Bennett',
    role: 'Lead Nursery Teacher',
    image: 'https://images.pexels.com/photos/8088232/pexels-photo-8088232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    socials: { fb: '#', ig: '#', in: '#' },
  },
  {
    name: 'Sophia Chen',
    role: 'Art & Craft Specialist',
    image: 'https://images.pexels.com/photos/8535594/pexels-photo-8535594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    socials: { fb: '#', ig: '#', in: '#' },
  },
  {
    name: 'Maria Rodriguez',
    role: 'Music & Movement',
    image: 'https://images.pexels.com/photos/5428254/pexels-photo-5428254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    socials: { fb: '#', ig: '#', in: '#' },
  },
  {
    name: 'Amelia Park',
    role: 'Language Arts Lead',
    image: 'https://images.pexels.com/photos/7692512/pexels-photo-7692512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    socials: { fb: '#', ig: '#', in: '#' },
  },
];

export const events = [
  {
    day: '14',
    month: 'Sep',
    title: 'Back to School Night',
    time: '5:00 PM – 7:00 PM',
    venue: 'Main Hall',
    image: 'https://images.pexels.com/photos/8363576/pexels-photo-8363576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: 'Meet the teachers, tour the classrooms and learn about the year ahead.',
  },
  {
    day: '22',
    month: 'Sep',
    title: 'Autumn Art Fair',
    time: '10:00 AM – 2:00 PM',
    venue: 'Playground',
    image: 'https://images.pexels.com/photos/8422165/pexels-photo-8422165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: 'Our little artists showcase their colourful creations for families to enjoy.',
  },
  {
    day: '05',
    month: 'Oct',
    title: 'Tiny Sports Day',
    time: '9:00 AM – 1:00 PM',
    venue: 'Sports Field',
    image: 'https://images.pexels.com/photos/8613149/pexels-photo-8613149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: 'A morning of fun races, team games and cheers for every child.',
  },
];

export const testimonials = [
  {
    quote:
      "My daughter runs into class every morning with a smile. The teachers genuinely care and the play-based curriculum is exactly what we hoped for.",
    name: 'Rachel Green',
    role: "Parent of Emma, age 4",
    image: 'https://images.pexels.com/photos/8363771/pexels-photo-8363771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    quote:
      "The progress in Leo's confidence and language in just one term has been remarkable. We love the warm, nurturing environment.",
    name: 'James Carter',
    role: "Parent of Leo, age 5",
    image: 'https://images.pexels.com/photos/8422141/pexels-photo-8422141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    quote:
      "From music to mini science, every day is an adventure. A School truly makes learning feel like magic.",
    name: 'Priya Sharma',
    role: "Parent of Anaya, age 3",
    image: 'https://images.pexels.com/photos/18830131/pexels-photo-18830131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const pricingPlans = [
  {
    name: 'Half Day',
    price: 290,
    period: '/month',
    desc: 'Perfect for our youngest learners easing into routine.',
    features: ['9:00 AM – 12:30 PM', '3 days a week', 'Morning snack included', 'Parent app access'],
    highlight: false,
  },
  {
    name: 'Full Day',
    price: 490,
    period: '/month',
    desc: 'Our most popular plan with the full A School experience.',
    features: ['8:00 AM – 4:00 PM', '5 days a week', 'All meals included', 'Two specialist classes', 'Parent app access'],
    highlight: true,
  },
  {
    name: 'Extended',
    price: 640,
    period: '/month',
    desc: 'Full day plus before & after care for busy families.',
    features: ['7:30 AM – 6:00 PM', '5 days a week', 'All meals included', 'All specialist classes', 'Homework club', 'Parent app access'],
    highlight: false,
  },
];

export const faqs = [
  {
    q: 'What ages do you accept?',
    a: 'We welcome children from 18 months through 7 years old, with classrooms grouped by developmental stage.',
  },
  {
    q: 'What is your teacher-to-child ratio?',
    a: 'Our ratios are intentionally low — 1:4 in nursery, 1:6 in preschool, and 1:8 in our older groups — so every child gets plenty of attention.',
  },
  {
    q: 'Do you provide meals?',
    a: 'Yes. Our full-day and extended plans include a nutritious morning snack, lunch and afternoon snack, all prepared fresh on-site.',
  },
  {
    q: 'Can we visit before enrolling?',
    a: 'Absolutely. We hold open tours every Tuesday and Thursday at 10 AM, or you can book a private visit through our contact page.',
  },
  {
    q: 'What is your illness policy?',
    a: 'Children must be fever-free for 24 hours without medication before returning. We follow a detailed health policy shared with all families at enrolment.',
  },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/8088099/pexels-photo-8088099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Colorful classroom', span: 'lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/8422148/pexels-photo-8422148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Clay play', span: '' },
  { src: 'https://images.pexels.com/photos/8613146/pexels-photo-8613146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ball play', span: '' },
  { src: 'https://images.pexels.com/photos/8535198/pexels-photo-8535198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Art activities', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/8422132/pexels-photo-8422132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Letters lesson', span: '' },
  { src: 'https://images.pexels.com/photos/8612928/pexels-photo-8612928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Educational toys', span: '' },
  { src: 'https://images.pexels.com/photos/15052434/pexels-photo-15052434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Classroom decor', span: '' },
  { src: 'https://images.pexels.com/photos/8363576/pexels-photo-8363576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Group activity', span: 'lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/8422164/pexels-photo-8422164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Alphabet learning', span: '' },
  { src: 'https://images.pexels.com/photos/18830131/pexels-photo-18830131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Toy blocks', span: '' },
];

export const stats = [
  { value: '500+', label: 'Happy Kids' },
  { value: '40+', label: 'Expert Teachers' },
  { value: '15', label: 'Years of Care' },
  { value: '25', label: 'Fun Classes' },
];

export const features = [
  {
    icon: BookOpen,
    title: 'Play-Based Curriculum',
    desc: 'Learning through play, exploration and hands-on discovery.',
    color: 'brand',
  },
  {
    icon: 'Music',
    title: 'Creative Arts',
    desc: 'Daily music, art and drama to nurture self-expression.',
    color: 'berry',
  },
  {
    icon: 'FlaskConical',
    title: 'STEM Discovery',
    desc: 'Age-appropriate science, tech and maths adventures.',
    color: 'sky',
  },
  {
    icon: 'Globe',
    title: 'Global Awareness',
    desc: 'Celebrating cultures, languages and our big world.',
    color: 'grass',
  },
];

export const blogPosts = [
  {
    title: '5 Easy Sensory Activities for Rainy Days',
    date: 'Sep 2, 2025',
    category: 'Activities',
    image: 'https://images.pexels.com/photos/8612928/pexels-photo-8612928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: 'Keep little hands busy with these simple, screen-free indoor ideas.',
  },
  {
    title: 'Why Play Is Serious Learning',
    date: 'Aug 25, 2025',
    category: 'Learning',
    image: 'https://images.pexels.com/photos/8422249/pexels-photo-8422249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: 'The research behind why children learn best through joyful play.',
  },
  {
    title: 'Building a Bedtime Routine That Sticks',
    date: 'Aug 14, 2025',
    category: 'Parenting',
    image: 'https://images.pexels.com/photos/12585867/pexels-photo-12585867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt: 'Simple, gentle steps to help your child wind down and sleep well.',
  },
];
