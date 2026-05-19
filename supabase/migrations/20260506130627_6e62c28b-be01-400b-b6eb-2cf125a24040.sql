CREATE TABLE public.meebouwen_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  interest TEXT NOT NULL,
  message TEXT NOT NULL,
  linkedin TEXT
);

ALTER TABLE public.meebouwen_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.meebouwen_submissions
  FOR INSERT TO anon WITH CHECK (true);
