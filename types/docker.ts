type DockerPort = {
  PrivatePort: number;
  PublicPort: number;
  Type: "tcp"| "upd"
}

type DockerNetwork = {
  NetworkID: string;
  EndpointID: string;
  Gateway: string;
  IPAddress: string;
  IPPrefixLen: number;
  IPv6Gateway: string;
  GlobalIPv6Address: string;
  GlobalIPv6PrefixLen: number;
  MacAddress: string;
};

type DockerMount = {
  Name: string;
  Source: string;
  Destination: string;
  Driver: string;
  Mode: string;
  RW: Boolean;
  Propagation: string;
}

type DockerApp = {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  State: "Created"|"Restarting"|"Running"|"Removing"|"Paused"|"Exited"|"Dead";
  Status: string;
  Ports: DockerPort[];
  Labels: Record<string, string>;
  SizeRw: number;
  SizeRootFs: number;
  HostConfig: {
    NetworkMode: string;
  };
  NetworkSettings: {
    Networks: Record<string, DockerNetwork>
  };
  Mounts: DockerMount[];
};

export type { DockerPort, DockerNetwork, DockerMount, DockerApp };